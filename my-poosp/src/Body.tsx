import React, { FC } from 'react';
import { Typography, Divider } from 'antd';

const { Title, Paragraph, Text } = Typography;

const Body: FC = () => (
    <div className="Body">
        <Typography>
            <Title>
                Introduction
            </Title>
            <Paragraph>
                This is a paragraph. The COVID-19 pandemic, also known as the coronavirus pandemic, is an ong
                oing global pandemic of coronavirus disease 2019 (COVID‑19), caused by severe acute respirato
                ry syndrome coronavirus 2 (SARS‑CoV‑2).[1] 
                <Text strong>
                    The outbreak was first identified in Wuhan, China,in December 2019.[4][6] The World Health Or
                    ganization declared the outbreak a Public Health Emergency of International Concern on 30 Ja
                </Text>
                <br></br><br></br>
                Press <Text keyboard>Esc</Text> to exit...
            </Paragraph>
        </Typography>
    </div>
);

export default Body