import React from "react";
import './styles.css';

function LandingPage() {
    return ( 
        <>
            <header className="Header fixed top-0 left-0 right-0 text-3xl">
                Header atau Navbar
            </header>
            <main className="center">
                <div className="bio-container">
                    <h1>BIODATA</h1>
                    <div className="biodata-row">
                        <div className="biodata-item">
                            <p>Nama     : Imam Bahrul Gausi</p>
                            <p>Umur     : 22th</p>
                            <p>Status   : Mahasiswa</p>
                            <p>Alamat   : Banyuwangi</p>
                        </div>
                        <div className="biodata-item">
                            <p>Nama     : Imam Bahrul</p>
                            <p>Umur     : 22th</p>
                            <p>Status   : Belum kawin</p>
                            <p>Hobi     : Futsal</p>
                        </div>
                        <div className="biodata-item">
                            <p>Nama     : Imam</p>
                            <p>Umur     : 22th</p>
                            <p>Status   : Lajang</p>
                            <p>Hobi     : Mancing</p>
                        </div>
                    </div>
                </div>
            </main>
            <footer className="Footer fixed bottom-0 left-0 right-0 text-3xl">
                Footer
            </footer>
        </>
    );
}

export default LandingPage;