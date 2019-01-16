import * as React from 'react';
import {MemberEntity} from '../../../model/member';
import { MemberCardComponent } from './memberCard';

interface Props {
    members: MemberEntity[];
}

export const MemberCollectionComponent = (props: Props) => {
  return (
      <div className="row ">
        <h2>Members Collection</h2>
          {
              props.members.map((member: MemberEntity) =>
                  <MemberCardComponent key={member.id} member={member}/>
              )
          }
      </div>
  );
}
