import "@/styles/Footer.css"; 

export default function Footer(){
    const links = [
        {link: "https://www.kriegg.com/imprint/", label: "Imprint"},
        {link: "https://www.kriegg.com/privacy-policy/", label: "Privacy Policy"},
        {link: "https://www.kriegg.com/cookie-settings/", label: "Cookie settings"},
    ]

    return(
        <div className="footer">
            {links.map(({link, label}, index)=>(
                <a key={index} href={link} children={label}/>
            ))}
            
        </div>
    )
}