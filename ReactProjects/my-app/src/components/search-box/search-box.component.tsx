import { type } from '@testing-library/user-event/dist/type';
import './search-box.styles.css'

interface ISearchBoxProps {
    className: string;
    placeholder?: string;
}

interface ISearchBoxProps {
    onChangeHandler: (a: string) => void
}

type SearchBoxProps = {
    className: string;
    placeholder?: string;
    onChangeHandler: (a: string) => void;
}

type CanadianAddress = {
    street: string;
    province: string;
}

type USAddress = {
    street: string;
    state: string;
}

const Address = {
    street: '',
    state: '',
    province: ''
}




const func: (a: string, b: number, c: boolean) => = (void) => {}

const SearchBox = ({className, placeholder, onChangeHandler }: ISearchBoxProps) => (    <input
    className={`search-box ${className}`}
    type='search'
    placeholder={placeholder}
    onChange={onChangeHandler}
    />
);

export default SearchBox;