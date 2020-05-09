import React, { Component } from 'react'
import withStyles from '@material-ui/core/styles/withStyles';
import {Link} from 'react-router-dom';

//MUI Stuff
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from "@material-ui/core/Typography";
const styles ={
    card:{
        display: 'flex'
    }
}

 class Scream extends Component {
    render(){
        const { classes,scream:{ body,createdAt,userImage,userHandle,screamId,likeCount,commentCount} } = this.props

        //const classes =this.props.classes;
        return(
            <Card>
                <CardMedia
                    image={userImage}
                    title="Profile image"/>
                    <CardContent>
                        <Typography variant="h5" component={Link} to={`/users/${userHandle}`}>{userHandle}</Typography>
                        <Typography variant="body2" color="textSecondary">{createdAt}</Typography>
                        <Typography variant="body1">{body}</Typography>
                    </CardContent>
            </Card>
        )
    }
 }

 export default withStyles(styles)(Scream);
