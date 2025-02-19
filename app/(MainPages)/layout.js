import StickyNavBar from "../comp/StickyNavBar"

export default function RootLayout({children}) {
    return (

        <>
        <StickyNavBar />
        <div>
            {children}
        </div>
        </>
    )
}