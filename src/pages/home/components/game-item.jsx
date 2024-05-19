import { Card, NavBar, Toast, Image, Collapse, Selector, Button } from 'antd-mobile';
import React, { useEffect, useRef, useState } from 'react';
import { AntOutline, RightOutline, LeftOutline } from 'antd-mobile-icons'
import '../../../../src/css/bottom.less'
import Item from 'antd-mobile/es/components/dropdown/item';
import { Navigate, useNavigate } from 'react-router-dom';
import MoreSeleectGames from './more-select-games';

const GameItem = ({
    projectList,
    foot,
    onChange
}) => {
    console.log("----foot.default_spu--->", typeof foot.default_spu)
    const navigate = useNavigate()
    const [gameArr, setGameArr] = useState({});
    const [defaultSpu, setDefaultSpu] = useState(foot.default_spu)
    useEffect(() => {
        // onChange && onChange(gameArr.arr, a);
    }, [gameArr]);

    return (
        <MoreSeleectGames
            data={defaultSpu}
            foot={foot}
            projectList={projectList}
            onChange={(selectedData) => {
                onChange && onChange(selectedData, defaultSpu);
                console.log("=====selectedData======>", selectedData)
            }}
        />
    );
}

export default GameItem;