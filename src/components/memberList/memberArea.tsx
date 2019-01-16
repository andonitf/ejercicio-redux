import * as React from 'react';
import {MemberEntity} from '../../model/member'
import { MemberCollectionComponent } from './components/memberCollection';

interface Props {
  members: Array<MemberEntity>;
  loadMembers: (organizationName: string) => any;
  onChange: (organizationName: string) => any;
  organizationName: string;
}

export class MemberAreaComponent extends React.Component<Props> {
  
  constructor(props: Props) {
      super(props);

      this.changeOrganization = this.changeOrganization.bind(this);
  }


  changeOrganization = (event) => {
    this.props.onChange(event.target.value);
    this.props.loadMembers(event.target.value);
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

              <select id="org" onChange={this.changeOrganization}>
                  <option value=""></option>
                  <option value="lemoncode">lemoncode</option>
                  <option value="microsoft">microsoft</option>
                  <option value="heroku">heroku</option>
               </select>

              <br />
              <MemberCollectionComponent members={members} />
          </div>
      );
  }
}
