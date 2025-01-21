import { RawDictionary } from '../types';

export const dict: RawDictionary = {
  MAIN_PAGE_TITLE: 'Bingo Generator',
  MAIN_PAGE_DESCRIPTION: 'Create personalized bingo cards, share the link with friends, fill them out online, conveniently share images in social media.',
  MAIN_PAGE_CALL_TO_ACTION: 'To start, click the button below',
  MAIN_PAGE_BUTTON: 'Create bingo',
  HEADER_NAV_HOME: 'Home',
  HEADER_NAV_CREATE: 'Create',
  CREATE_PAGE_TITLE: 'Create bingo',
  CREATE_FORM_INPUT_TITLE_LABEL: 'Card title',
  CREATE_FORM_INPUT_TITLE_PLACEHOLDER: 'Enter card title',
  CREATE_FORM_INPUT_CELL_LABEL: 'Text for current cell',
  CREATE_FORM_INPUT_CELL_PLACEHOLDER: 'For example: "Buy a gift"',
  CREATE_FORM_INPUT_CELL_NOTE: 'Select a cell to change the text',
  CREATE_FORM_BUTTON_DOWNLOAD: 'Download',
  BINGO_TEMPLATE_FOOTER: 'Made by Bingo Generator UWURead',
};

export type Dict = typeof dict;
