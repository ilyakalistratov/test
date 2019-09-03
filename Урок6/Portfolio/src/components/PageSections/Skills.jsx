import React from 'react';
import { Layout, Row, Col, Progress } from 'antd';
import { observer } from 'mobx-react';
import { inject } from 'mobx-react';

@inject("store")
@observer
class Skills extends React.Component {
  state = {
    skills: [{
      title: 'HTML5',
      percent: '85',
      strokeColor: {
        '0%': '#108ee9',
        '100%': '#87d068',
      }
    }, {
      title: 'CSS/CSS3',
      percent: '85',
      strokeColor: {
        '0%': '#108ee9',
        '100%': '#87d068',
      }
    }, {
      title: 'JavaScript',
      percent: '60',
    }, {
      title: 'jQuery',
      percent: '30',
    }, {
      title: 'React',
      percent: '45',
    }, {
      title: 'Redux',
      percent: '45',
    }, {
      title: 'Bootstrap',
      percent: '30',
    }, {
      title: 'Ant Design',
      percent: '35',
    },]
  }

  render() {
    const { theme } = this.props.store;
    return (
      <Layout id='Skills' style={{ backgroundColor: `${theme.background2}`, color: `${theme.colorP}` }}>
        <Row>
          <Col>
            <h2 style={{ textAlign: 'center', fontSize: '32px', color: `${theme.colorH}`, margin: '20px 0' }}>Навыки</h2>
          </Col>
        </Row>
        <Row type="flex" justify="center" gutter={32} style={{ margin: '20px 0 30px 0' }}>
          <Col xs={{ span: 19 }} sm={{ span: 17 }} md={{ span: 15 }} lg={{ span: 10 }}>
            {this.state.skills.map(item => {
              return (
                <div>
                  <Progress
                    strokeColor={item.strokeColor}
                    percent={item.percent} />
                  <p>{item.title}</p>
                </div>
              )
            })}

          </Col>
        </Row>

      </Layout>

    )
  }
}
export default Skills;