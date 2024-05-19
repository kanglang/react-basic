
import React, { useEffect, useState, useLayoutEffect } from 'react'
import { Card, NavBar, Toast, Image, Collapse, Selector, Button, Badge, Input, Space } from 'antd-mobile';

import '../../../../src/css/bottom.less'
const CheckButton = ({
    data,
    onchange,
    defaultValue
}) => {
    console.log("------data--------->", data)
    console.log("------defaultValue--------->", defaultValue)
    const [btnClassNameArry, setBtnClassNameArry] = useState([defaultValue]);

    // 选中button，多选
    const handleSelect = (itemChild) => {
        // 如果点击的在数组中已经存在，则从数组删除，否则，添加到数组
        if (btnClassNameArry.indexOf(itemChild) > -1) {
            btnClassNameArry.splice(btnClassNameArry.indexOf(itemChild), 1);
        } else {
            btnClassNameArry.push(itemChild);
        }

        const newBtnClassNameArry = [...btnClassNameArry]; // 深拷贝
        // console.log("=======newBtnClassNameArry>", newBtnClassNameArry)
        // 改变state状态值

        onchange && onchange(newBtnClassNameArry)
        setBtnClassNameArry(newBtnClassNameArry)
    }

    // useEffect(() => {
    //     console.log("=======btnClassNameArry---->", btnClassNameArry)
    // }, [btnClassNameArry.length])


    return (
        <div style={{ paddingLeft: "16px", paddingRight: "16px", paddingTop: "8px", flexWrap: 'wrap' }}>
            {data.map((itemChild) => {
                if (!itemChild) return;
                return (
                    <Button
                        key={itemChild}
                        style={{ width: "23%", lineHeight: "26px",margin:'2px' }}
                        size='small'
                        color={btnClassNameArry.indexOf(itemChild) > -1 ? "danger" : "default"}
                        onClick={() => {
                            handleSelect(itemChild);
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