import { createSignal } from 'solid-js';
import { useTranslationContext } from '@/i18n/context';
import type { BingoColors, BingoCell } from '@/types';

const DEFAULT_BINGO_COLORS: BingoColors = {
  background: '#375059',
  title: '#FFFFFF',
  cell: '#f8f9fA',
  text: '#375059',
  border: '#FFFFFF',
};

const DEFAULT_EXPORT_WIDTH = 1000;

export function useCreate () {
  const i18n = useTranslationContext();
  const [bingoColors, setBingoColors] = createSignal<BingoColors>(DEFAULT_BINGO_COLORS);
  function setDefaultBingoColors () {
    setBingoColors(DEFAULT_BINGO_COLORS);
  }
  const [bingoHeight, setBingoHeight] = createSignal(0);
  const [bingoTitle, setBingoTitle] = createSignal(i18n.t('CREATE_FORM_INPUT_TITLE_PLACEHOLDER'));
  const [bingoCells, setBingoCells] = createSignal<BingoCell[]>(
    new Array(25).fill(null).map((_, index) => ({
      text: `Cell ${index + 1}`,
      textSize: 3,
      index,
    })),
  );
  const [currentCell, setCurrentCell] = createSignal<BingoCell | null>(null);
  const [exportWidth, setExportWidth] = createSignal(DEFAULT_EXPORT_WIDTH);

  function onClickCell (index: number) {
    setCurrentCell(bingoCells()[index]);
  }

  function onInputCell (index: number, text: string) {
    const prevCellValue = bingoCells()[index];
    setBingoCells(prev => [...prev.slice(0, index), { ...prevCellValue, text }, ...prev.slice(index + 1)]);
  }

  function onInputCellSizeMultiplier (index: number, textSize: number) {
    const prevCellValue = bingoCells()[index];
    setBingoCells(prev => [...prev.slice(0, index), { ...prevCellValue, textSize }, ...prev.slice(index + 1)]);
  }

  function onResize () {
    const bingoContainer = document.getElementById('bingo-container');
    if (!bingoContainer) {
      requestAnimationFrame(onResize);
      return 0;
    }
    const height = bingoContainer.clientHeight;
    setBingoHeight(height);
  }

  return {
    bingoColors,
    setBingoColors,
    setDefaultBingoColors,
    bingoHeight,
    setBingoHeight,
    bingoTitle,
    setBingoTitle,
    bingoCells,
    setBingoCells,
    currentCell,
    setCurrentCell,
    onClickCell,
    onInputCell,
    onInputCellSizeMultiplier,
    onResize,
    exportWidth,
    setExportWidth,
  };
}
