import * as React from 'react';
import {MemberEntity} from '../../../model/member';
import {MemberRowComponent} from './memberRow';
import { MemberTableHeaderComponent } from "./memberTableHeader";

interface Props {
    members: MemberEntity[];
}

export const MemberTableComponent = (props: Props) => {
  return (
      <div className="row">
        <h2> Members Page</h2>
        <table className="table">
          <MemberTableHeaderComponent />
          <tbody>
            {
                props.members.map((member: MemberEntity) =>
                    <MemberRowComponent key={member.id} member={member}/>
                )
            }
          </tbody>
        </table>
      </div>
  );
}
