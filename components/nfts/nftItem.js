//each nft 
import Image from 'next/image'
import Card from '../ui/Card';
import classes from './nftItem.module.css';

function nftItem(props) {
  return (
    <li className={classes.item}>
      <Card>
        <div className={classes.image}>
          <Image src={props.image} alt={props.title} />  
        </div>
        <div className={classes.content}>
          <h3>{props.title}</h3>
          <address>{props.address}</address>
        </div>
        <div className={classes.actions}>
          <button>Show Details</button>
        </div>
      </Card>
    </li>
  );
}

export default nftItem;