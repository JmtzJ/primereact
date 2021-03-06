import React, { Component } from 'react';
import classNames from 'classnames';

export class FooterCell extends Component {

    render() {
        let className = classNames('ui-state-default', this.props.footerClassName||this.props.className);
                            
        return (
            <td className={className} style={this.props.footerStyle||this.props.style} 
                colSpan={this.props.colSpan} rowSpan={this.props.rowSpan}>
               {this.props.footer}
            </td>
        );
    }
}