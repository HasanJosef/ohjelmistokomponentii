import React from 'react';

const OpiskelijaTiedot = ({ opiskelija }) => {
    return (
        <div>
            <h3>opiskelijan tiedo:</h3>
            <p>Nimi: {opiskelija.nimi}</p>
            <p>ikä: {opiskelija.ika}</p>
            <p>kurssi: {opiskelija.kurssi}</p>
        </div>
    );
};

export default OpiskelijaTiedot;
