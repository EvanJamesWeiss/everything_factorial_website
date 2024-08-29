import React from "react";
import PropTypes from "prop-types";
import {Tooltip, Typography} from "@mui/material";
import {getFactorialNumber} from "../helpers/factorialMath";

const FactorialText = (props) => {
    const {children, variant, color, customStyle} = props;
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
                                offset: [0, -15],
                            },
                        },
                    ],
                },
            }}
        >
            <Typography
                variant={variant}
                color={color}
                align="center"
                sx={customStyle}
            >
                {children}!
            </Typography>
        </Tooltip>
    );
}

FactorialText.propTypes = {
    children: PropTypes.node.isRequired,
    variant: PropTypes.string,
    color: PropTypes.string,
    customStyle: PropTypes.object,
}

FactorialText.defaultProps = {
    variant: "h6",
    color: "textPrimary",
    customStyle: {},
}

export default FactorialText;