import { Show } from 'solid-js';
import { useTranslationContext } from '@/i18n/context';
import { BingoDownloadButton } from './bingoDownloadButton';
import { TextField, TextFieldLabel, TextFieldRoot } from '@/components/ui/textfield';
import { Alert, AlertTitle } from '@/components/ui/alert';
import { NumberSlider } from '@/components/ui/numberSlider';
import type { Component, Accessor } from 'solid-js';
import type { BingoCell } from '@/types';

export type BingoTemplateFormProps = {
  bingoTitle: Accessor<string>;
  setBingoTitle: (title: string) => void;
  currentCell: Accessor<BingoCell | null>;
  setCurrentCell: (cell: BingoCell) => void;
  onInputCell: (index: number, text: string) => void;
  onInputCellSizeMultiplier: (index: number, sizeMultiplier: number) => void;
};

export const BingoTemplateForm: Component<BingoTemplateFormProps> = (props) => {
  const i18n = useTranslationContext();

  return (
    <>
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

      <Show when={props.currentCell()}>
        <TextFieldRoot>
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
          class="mb-2"
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

      <BingoDownloadButton />
    </>
  );
};
