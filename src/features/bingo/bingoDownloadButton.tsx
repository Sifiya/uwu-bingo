import { useTranslationContext } from '@/lib/i18n/context';
import * as htmlToImage from 'html-to-image';
import { Button } from '@/components/ui/button';
import type { Component } from 'solid-js';

interface bingoDownloadButtonProps {
  exportWidth: number;
}

export const BingoDownloadButton: Component<bingoDownloadButtonProps> = (props) => {
  const i18n = useTranslationContext();
  return (
    <Button
      variant="default"
      size="lg"
      class="gap-2"
      onClick={() => {
        htmlToImage
          .toPng(
            document.getElementById('bingo-template') as HTMLElement,
            {
              quality: 1,
              canvasWidth: props.exportWidth / 2,
              canvasHeight: Math.round(props.exportWidth * 1.2) / 2,
            },
          )
          .then(dataUrl => {
            const link = document.createElement('a');
            link.download = 'bingo.png';
            link.href = dataUrl;
            link.click();
          });
      }}
    >
      <i class="ri-download-cloud-line text-xl"></i>
      <span>{i18n.t('CREATE_FORM_BUTTON_DOWNLOAD')}</span>
    </Button>
  );
};
