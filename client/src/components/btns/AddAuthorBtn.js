import { Link } from "@reach/router";
import { Button } from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';
import AddIcon from '@mui/icons-material/Add';

const AddAuthorBtn = (props) => {

  const useStyles = makeStyles((theme) => ({
    btn: {
      margin: '1px',
      maxHeight: '25xp',
      fontSize: '14px',
      fontWeight: '700',
      backgroundColor: '#97f09d',
      border: '2px solid black',
      borderRadius: '500px'
    }
  }));

  const classes = useStyles();
  const { btn } = classes;
  return (
    <Link to={`/authors/add`}>
      <Button className={btn} size='small'>
        <AddIcon className={btn} />
        Add Author
      </Button>
    </Link>
  )
}
export default AddAuthorBtn;