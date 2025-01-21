import * as htmlToImage from 'html-to-image';
import { Button } from '@/components/ui/button';
import type { Component } from 'solid-js';

export const BingoDownloadButton: Component = () => {
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
      <span>Завантажити</span>
    </Button>
  );
};
