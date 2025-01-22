import { Show } from 'solid-js';
import { useTranslationContext } from '@/i18n/context';
import { BingoDownloadButton } from './bingoDownloadButton';
import { TextField, TextFieldLabel, TextFieldRoot } from '@/components/ui/textfield';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible';
import { Alert, AlertTitle } from '@/components/ui/alert';
import { Button } from '@/components/ui/button';
import { ColorInput } from '@/components/ui/colorInput';
import { NumberSlider } from '@/components/ui/numberSlider';
import type { Component, Accessor } from 'solid-js';
import type { BingoCell, BingoColors } from '@/types';

export type BingoTemplateFormProps = {
  bingoTitle: Accessor<string>;
  setBingoTitle: (title: string) => void;
  currentCell: Accessor<BingoCell | null>;
  setCurrentCell: (cell: BingoCell) => void;
  onInputCell: (index: number, text: string) => void;
  onInputCellSizeMultiplier: (index: number, sizeMultiplier: number) => void;
  bingoColors: Accessor<BingoColors>;
  setBingoColors: (colors: BingoColors) => void;
  setDefaultBingoColors: () => void;
};

function onChangeColor (props: {
  color: keyof BingoColors;
  value: string;
  prevColors: BingoColors;
  setter: (colors: BingoColors) => void;
}) {
  const newColors = {
    ...props.prevColors,
    [props.color]: props.value,
  };
  props.setter(newColors);
}

export const BingoTemplateForm: Component<BingoTemplateFormProps> = (props) => {
  const i18n = useTranslationContext();

  return (
    <>
      <BingoDownloadButton />

      <TextFieldRoot>
        <TextFieldLabel>
          {i18n.t('CREATE_FORM_INPUT_TITLE_LABEL')}
        </TextFieldLabel>
        <TextField
          id="bingo-title-input"
          placeholder={i18n.t('CREATE_FORM_INPUT_TITLE_PLACEHOLDER')}
          value={props.bingoTitle()}
          onInput={e => {
            const target = e.target as HTMLInputElement;
            props.setBingoTitle(target.value);
          }}
        />
      </TextFieldRoot>

      <hr class="border-muted-foreground/30" />

      <Show when={props.currentCell()}>
        <TextFieldRoot class="animate-in fade-in-0 duration-500">
          <TextFieldLabel>
            {i18n.t('CREATE_FORM_INPUT_CELL_LABEL')}
          </TextFieldLabel>
          <TextField
            id="bingo-cell-input"
            placeholder={i18n.t('CREATE_FORM_INPUT_CELL_PLACEHOLDER')}
            value={props.currentCell()?.text ?? ''}
            disabled={!props.currentCell()}
            onInput={e => {
              let prevCell = props.currentCell();
              if (!prevCell) return;

              const target = e.target as HTMLInputElement;
              props.setCurrentCell({
                ...prevCell,
                text: target.value,
              });
              props.onInputCell(prevCell.index, target.value);
            }}
          />
        </TextFieldRoot>

        <NumberSlider
          class="mb-2 animate-in fade-in-0 duration-500"
          label={i18n.t('CREATE_FORM_INPUT_CELL_SIZE_LABEL')}
          disabled={!props.currentCell()}
          min={1.6}
          step={0.2}
          max={5}
          value={[props.currentCell()?.textSize ?? 1.6]}
          onChange={value => {
            const prevCell = props.currentCell();
            if (!prevCell) return;
            props.setCurrentCell({
              ...prevCell,
              textSize: value[0],
            });
            props.onInputCellSizeMultiplier(prevCell.index, value[0]);
          }}
        />
      </Show>

      <Show when={!props.currentCell()}>
        <Alert class="flex gap-2 text-muted-foreground/80">
          <i class="ri-information-2-line text-xl"></i>
          <AlertTitle>{i18n.t('CREATE_FORM_INPUT_CELL_NOTE')}</AlertTitle>
        </Alert>
      </Show>

      <Collapsible>
        <CollapsibleTrigger class="text-sm w-full flex justify-between items-center">
          <span>{i18n.t('CREATE_FORM_COLORS_GENERAL_LABEL')}</span>
          <i class="ri-arrow-down-s-line text-xl"></i>
        </CollapsibleTrigger>
        <CollapsibleContent class="animate-out fade-out-0 duration-300">
          <div class="w-full grid grid-cols-3 gap-3 pt-3">
            <ColorInput
              label={i18n.t('CREATE_FORM_COLORS_BACKGROUND_LABEL')}
              name="background"
              value={props.bingoColors().background}
              onChange={value => {
                onChangeColor({
                  color: 'background',
                  value,
                  prevColors: props.bingoColors(),
                  setter: props.setBingoColors,
                });
              }}
            />
            <ColorInput
              label={i18n.t('CREATE_FORM_COLORS_TITLE_LABEL')}
              name="title"
              value={props.bingoColors().title}
              onChange={value => {
                onChangeColor({
                  color: 'title',
                  value,
                  prevColors: props.bingoColors(),
                  setter: props.setBingoColors,
                });
              }}
            />
            <ColorInput
              label={i18n.t('CREATE_FORM_COLORS_CELL_LABEL')}
              name="cell"
              value={props.bingoColors().cell}
              onChange={value => {
                onChangeColor({
                  color: 'cell',
                  value,
                  prevColors: props.bingoColors(),
                  setter: props.setBingoColors,
                });
              }}
            />
            <ColorInput
              label={i18n.t('CREATE_FORM_COLORS_TEXT_LABEL')}
              name="text"
              value={props.bingoColors().text}
              onChange={value => {
                onChangeColor({
                  color: 'text',
                  value,
                  prevColors: props.bingoColors(),
                  setter: props.setBingoColors,
                });
              }}
            />
            <ColorInput
              label={i18n.t('CREATE_FORM_COLORS_BORDER_LABEL')}
              name="border"
              value={props.bingoColors().border}
              onChange={value => {
                onChangeColor({
                  color: 'border',
                  value,
                  prevColors: props.bingoColors(),
                  setter: props.setBingoColors,
                });
              }}
            />
          </div>
          <Button variant="link" onClick={props.setDefaultBingoColors} class="w-full justify-start my-2 p-0">
            {i18n.t('CREATE_FORM_COLORS_BUTTON_RESET')}
          </Button>
        </CollapsibleContent>
      </Collapsible>
    </>
  );
};
