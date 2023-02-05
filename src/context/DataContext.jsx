import { createContext, useState } from 'react';
import datajson from '../../data.json'

export const DataContext = createContext();

const DataContextProvider = ({ children }) => {

    const data = datajson

    const [info, setInfo] = useState();

    const [position, setPosition] = useState();

    const [teamEmblem,setTeamEmblem] = useState()

    const positionIcon = {
        GK: 'https://static.wikia.nocookie.net/inazuma-eleven/images/8/85/GKicon.png',
        DF: 'https://static.wikia.nocookie.net/inazuma-eleven/images/a/a9/DFicon.png',
        MF: 'https://static.wikia.nocookie.net/inazuma-eleven/images/f/fd/MFicon.png',
        FW: 'https://static.wikia.nocookie.net/inazuma-eleven/images/4/4f/FWicon.png',
    };

    const elementIcon = {
        Wind: 'https://static.wikia.nocookie.net/inazuma-eleven/images/0/04/Wind_Icon.png',
        Fire: 'https://static.wikia.nocookie.net/inazuma-eleven/images/c/c8/Fire_Icon.png',
        Wood: 'https://static.wikia.nocookie.net/inazuma-eleven/images/2/23/Wood_Icon.png',
        Earth: 'https://static.wikia.nocookie.net/inazuma-eleven/images/0/02/Earth_Icon.png',
        
    }

    const genderIcon = {
        Male: 'https://static.wikia.nocookie.net/inazuma-eleven/images/b/b7/Male_Icon.png',
        Female: 'https://static.wikia.nocookie.net/inazuma-eleven/images/7/71/Female_Icon.png',
    }

    return (
        <DataContext.Provider
            value={{ info, setInfo, position, setPosition, positionIcon, elementIcon, genderIcon, teamEmblem, setTeamEmblem, data }}
        >
            {children}
        </DataContext.Provider>
    );
};

export default DataContextProvider;
