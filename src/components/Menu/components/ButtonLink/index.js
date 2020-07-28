import React from 'react';

function ButtonLink(props){
//props => {className: "o que for passado",
//          href: "/",
//          children: "o que tiver escrito"}
    return(
        <a href={props.href} className={props.className}>
            {props.children}
        </a>
    );
}

export default ButtonLink;