import { useSearchParams } from "react-router-dom";

const About = () => {
    //const [checked, setChecked] = useState(false);
    const [searchParams, setSearchParams] = useSearchParams();

    //?checked=false, ?checked=true
    const c = searchParams.get('checked');
    const checked = c === 'true' ? true : false;
    
    return (
        <div>
            <h1>About</h1>
            <p>사이트 소개....</p>
            { checked ? '체크됨' : '체크 안됨' }
            <input type='checkbox' checked='checked'></input>
        </div>
    );
};
export default About;