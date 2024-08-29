import React from "react";
import PropTypes from "prop-types";
import {Link, Tooltip} from "@mui/material";
import {getFactorialNumber} from "../helpers/factorialMath";

const FactorialLink = (props) => {
    const {children, href, color, customStyle} = props;
    const stripHtmlTags = (children) => {
        return React.Children.map(children, (child) => {
            if (typeof child === 'string') {
                return child;
            } else if (React.isValidElement(child)) {
                return stripHtmlTags(child.props.children);
            }
            return '';
        }).join('');
    };

    return (
        <Tooltip
            title={getFactorialNumber(stripHtmlTags(children), true)}
            placement="bottom"
            slotProps={{
                popper: {
                    modifiers: [
                        {
                            name: 'offset',
                            options: {
                                offset: [0, -5],
                            },
                        },
                    ],
                },
            }}
        >
            <Link
                href={href}
                color={color}
                align="center"
                sx={customStyle}
            >
                {children}!
            </Link>
        </Tooltip>
    );
}

FactorialLink.propTypes = {
    children: PropTypes.node.isRequired,
    href: PropTypes.string.isRequired,
    color: PropTypes.string,
    customStyle: PropTypes.object,
}

FactorialLink.defaultProps = {
    color: "inherit",
    customStyle: {},
}

export default FactorialLink;