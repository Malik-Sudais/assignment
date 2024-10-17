import Link from "next/link";
//nav, asie, header,footer these tags used for SEO
const HomePage = () => {
    return (
      <div>
        <h1>This is home page</h1>
        <ul>
          <li>
            <Link href="/about" target="_blank">Home</Link>
          </li>
          <li>
            <a href="/about">About</a>
          </li>
          <li>
            <a href="/contact">Contact</a>
          </li>
        </ul>
      
      <h1 >
      Home Page
      </h1>
      </div>
    )

  };
 export default HomePage;