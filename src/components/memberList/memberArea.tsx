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
      return (
          <div>
              <MemberTableComponent members={this.props.members} />
              <br />
              <input
                  type="submit"
                  value="Buscar"
                  className="btn btn-default"
                  onClick={() =>
                      this.props.loadMembers(this.props.organizationName)
                  }
              />
              <label>Organización:</label>
              <input
                  type="text"
                  value={this.props.organizationName}
                  onChange={event => this.props.onChange(event.target.value)}
              />
          </div>
      );
  }
}
