import { create } from 'zustand'

export const useItemStore = create((set) => ({
  office: undefined,
  total: '',
  sale: [],
  setOffice: (office) => set(() => ({ office: office })),
  setTotal: (total) => set(() => ({ total: total })),
  setSale: (sale) => set(() => ({ sale: sale }))
}))
