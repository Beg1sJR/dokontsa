import Header from "./../components/header/Header";

const Home = () => {
    return ( 
    <>
    
    <Header/>

    <main className="section">
        <div className="container">

                <ul className="content-list">
                    <li className="content-list__item">
                        <h2 className="title-2">Made by Umbet Nariman</h2>
                        <p></p>
                    </li>
                    <li className="content-list__item">
                        <h2 className="title-2">Used libraries</h2>
                        <p>React.js, React-Router</p>
                    </li>
                </ul>

        </div>
    </main>
    </>
 );
}
 
export default Home;