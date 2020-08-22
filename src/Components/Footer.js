import React from 'react';
import { gitRepo } from '../constants'

function Footer() {
    return (
        <footer>
            <p>Copyright &copy;  {new Date().getFullYear()} &nbsp;
            <a target="_blank" rel="noopener noreferrer" href="https://aromalanil.me/">Aromal Anil</a>&nbsp;
            |&nbsp; <a href={`${gitRepo}/blob/master/LICENSE`} target="_blank" rel="noopener noreferrer">MIT License</a></p>
        </footer>
    )
}

export default Footer
