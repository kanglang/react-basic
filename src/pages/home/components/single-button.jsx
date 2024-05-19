
import React, { useEffect, useState, useLayoutEffect } from 'react'
import { Card, NavBar, Toast, Image, Collapse, Selector, Button, Badge, Input, Space } from 'antd-mobile';

import '../../../../src/css/bottom.less'
const numberData = [5, 10, 15, 20, 25, 30, 40, 50, 60, 70, 80, 90, 100, 150, 180, 200]
const CheckButton = ({
    data,
    onchange,
}) => {

    const [btnClassNameIndex, setBtnClassNameIndex] = useState();

    // 选中button，单选
    const handleSelect = (number, index) => {
        // 如果点击的在数组中已经存在，则从数组删除，否则，添加到数组
        onchange && onchange(number)
        setBtnClassNameIndex(index)
    }

    useEffect(() => {

    }, [])


    return (
        <div style={{ paddingLeft: "16px", paddingRight: "16px", paddingTop: "8px", flexWrap: 'wrap' }}>
            {numberData.map((itemChild, index) => {
                return (
                    <Button
                        key={index}
                        style={{ width: "23%", lineHeight: "26px" ,margin:'2px'}}
                        size='small'
                        color={btnClassNameIndex == index ? "danger" : "default"}
                        onClick={() => {
                            handleSelect(itemChild, index);
                        }}
                    >
                        {itemChild}
                    </Button>
                )
            })
            }
        </div>
    );
}

export default CheckButton;
const styles = {
    ruleTitle: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        paddingBottom: "8px",
        paddingTop: "8px",
        background: "#e6e6e6",
        fontSize: "16px"
    }
}