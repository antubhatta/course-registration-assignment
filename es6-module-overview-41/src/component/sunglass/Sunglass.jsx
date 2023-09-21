import './sunglass.css'
import { Watch } from '../watch/watch';
import { Add,Multify,dividedByTheFirstNumberVagKorboAmi as divide } from '../../Utility/Calculate';


const Sunglass = () => {
    const first=60
    const second=40
    const sum=Add(first+second)
    const mul=Multify(first*second)
    const div=divide(first/second)
    return (
        <div>
            <Watch></Watch>
        </div>
    );
};

export default Sunglass;