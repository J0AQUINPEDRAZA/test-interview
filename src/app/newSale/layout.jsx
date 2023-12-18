import SideBar from '../../components/NewSale/Sidebar/SideBar'

export default function LayoutNewSale({ children }) {
  return (
    <main className='flex w-full bg-LightGray h-full'>
      <SideBar />
      {children}
    </main>
  )
}
