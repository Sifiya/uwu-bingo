import { createSignal, Show } from 'solid-js';
import { ModalContext, useModalContext } from './context';
import { Portal } from 'solid-js/web';
import type { Component, JSX } from 'solid-js';

type ModalRootProps = {
  children: JSX.Element;
};

export const ModalRoot: Component<ModalRootProps> = (props) => {
  const [isOpen, setIsOpen] = createSignal(false);
  return (
    <ModalContext.Provider value={{ isOpen, open: () => setIsOpen(true), close: () => setIsOpen(false) }}>
      {props.children}
    </ModalContext.Provider>
  );
};

type ModalTriggerProps = {
  children: JSX.Element;
  class?: string;
};

export const ModalTrigger: Component<ModalTriggerProps> = (props) => {
  const modal = useModalContext();
  return <button onClick={modal.open} class={props.class}>{props.children}</button>;
};

type ModalProps = {
  children: JSX.Element;
};

export const Modal: Component<ModalProps> = (props) => {
  const modal = useModalContext();
  return (
    <Portal>
      <Show when={modal.isOpen()}>
        <section class="fixed inset-0 w-screen h-screen bg-background px-8 py-6">
          <button class="absolute top-6 right-6" onClick={modal.close}>
            <i class="ri-close-line text-2xl"></i>
          </button>
          {props.children}
        </section>
      </Show>
    </Portal>
  );
};
