import { create } from "zustand";

export const useViewerStore =
  create((set) => ({
    model: null,

    cameraPosition: [0, 0, 5],

    setModel: (model) =>
      set({ model }),

    setCameraPosition: (
      position
    ) =>
      set({
        cameraPosition:
          position,
      }),
  }));