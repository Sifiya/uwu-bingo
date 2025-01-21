import { useTranslationContext } from '@/i18n/context';
import { BingoDownloadButton } from './bingoDownloadButton';
import { TextField, TextFieldLabel, TextFieldRoot } from '@/components/ui/textfield';
import { Paragraph } from '@/components/typography/paragraph';
import type { Component, Accessor } from 'solid-js';

export type BingoTemplateFormProps = {
  bingoTitle: Accessor<string>;
  setBingoTitle: (title: string) => void;
  currentCell: Accessor<{
    text: string;
    index: number;
  }>;
  setCurrentCell: (cell: {
    text: string;
    index: number;
  }) => void;
  onInputCell: (index: number, text: string) => void;
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
          placeholder={i18n.t('CREATE_FORM_INPUT_TITLE_PLACEHOLDER')}
          value={props.bingoTitle()}
          onInput={e => {
            const target = e.target as HTMLInputElement;
            props.setBingoTitle(target.value);
          }}
        />
      </TextFieldRoot>

      <TextFieldRoot>
        <TextFieldLabel>
          {i18n.t('CREATE_FORM_INPUT_CELL_LABEL')}
        </TextFieldLabel>
        <TextField
          placeholder={i18n.t('CREATE_FORM_INPUT_CELL_PLACEHOLDER')}
          value={props.currentCell().text}
          disabled={props.currentCell().index === -1}
          onInput={e => {
            const target = e.target as HTMLInputElement;
            props.setCurrentCell({
              text: target.value,
              index: props.currentCell().index,
            });
            props.onInputCell(props.currentCell().index, target.value);
          }}
        />
        <Paragraph variant="secondary" class="text-xs">
          {i18n.t('CREATE_FORM_INPUT_CELL_NOTE')}
        </Paragraph>
      </TextFieldRoot>
      <BingoDownloadButton />
    </>
  );
};
