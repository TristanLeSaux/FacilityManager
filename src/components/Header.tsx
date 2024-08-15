import '@/styles/Header.css'

export default function Header(){
    
	const navLinks = [
		{ link: "resources", label: "Resources" },
		{ link: "b", label: "Assembly Pad" },
		{ link: "c", label: "Facilities" },
		{ link: "d", label: "Regiments" },
	]

    return(
        <div className="header">
            {navLinks.map(({ link, label }, index) => (
					<a key={index} href={link} children={label} />
				))}
        </div>
    )
}