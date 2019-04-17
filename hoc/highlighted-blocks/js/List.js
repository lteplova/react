'use strict';

function ListPretty(Popular, New) {
    let Component = null;
    
    return class extends React.Component {
        constructor(props) {
            super(props);
             if (props.views < 100) {
                 Component = New;
            } else if (props.views > 1000) {
                Component = Popular;
            } else {
                Component = props => {
                    return props.children
                };
            }
        }
        render() {
            return <Component>{this.props.children}</Component>
        }
    }
}

const PrettyComponent = ListPretty(Popular, New);

const List = props => {
    return props.list.map(item => {
        switch (item.type) {
            case 'video':
                return (
                    <PrettyComponent views={item.views}><Video {...item} /></PrettyComponent>
                );

            case 'article':
                return (
                    <PrettyComponent views={item.views}><Article {...item} /></PrettyComponent>
                );
        }
    });
};
