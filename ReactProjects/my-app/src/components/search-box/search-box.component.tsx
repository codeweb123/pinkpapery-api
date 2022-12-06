import { type } from '@testing-library/user-event/dist/type';
import './search-box.styles.css'

interface ISearchBoxProps {
    className: string;
    placeholder?: string | null;
}


const func: (a: string, b: number, c: boolean) => = (void) => {}

const SearchBox = ({className, placeholder, onChangeHandler }) => (    <input
    className={`search-box ${className}`}
    type='search'
    placeholder={placeholder}
    onChange={onChangeHandler}
    />
);

export default SearchBox;