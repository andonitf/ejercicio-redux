import * as React from 'react';
import {MemberEntity} from '../../../model/member';
import {
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  Typography
} from "@material-ui/core";

interface Props  {
  member : MemberEntity;
}

export const MemberCardComponent = (props: Props) => {
   return (
    <Card className="member-card">
      <CardActionArea>
        <CardMedia
          image={props.member.avatar_url}
          title={props.member.login}
          style={{ height: 140 }}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            ID: {props.member.id}
          </Typography>
          <Typography component="p">
            Login: {props.member.login}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
   );
}
