import * as React from 'react';
import {MemberTableComponent} from './components/memberTable';
import {MemberEntity} from '../../model/member'

interface Props {
  members: Array<MemberEntity>;
  loadMembers: (organizationName: string) => any;
  onChange: (organizationName: string) => any;
  organizationName: string;
}

export class MemberAreaComponent extends React.Component<Props> {

  constructor(props: Props) {
      super(props);
  }

  public render() {

    const { members, loadMembers, onChange, organizationName} = this.props;

      return (
          <div>
              <input
                  type="submit"
                  value="Buscar"
                  className="btn btn-default"
                  onClick={() =>
                      loadMembers(organizationName)
                  }
              />
              <label>Organización: </label>
              <input
                  type="text"
                  value={organizationName}
                  onChange={event => onChange(event.target.value)}
              />
              <br />
              <MemberTableComponent members={members} />
          </div>
      );
  }
}
