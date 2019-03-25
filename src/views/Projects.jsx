import React from 'react'
import PropTypes from 'prop-types'
import { Divider, DividerMiddle } from '../elements/Dividers'
import Content from '../elements/Content'
import Inner from '../elements/Inner'
import { UpDown, UpDownWide } from '../styles/animations'
import { colors } from '../../tailwind'
import SVG from '../components/SVG'

const Projects = ({ children, offset }) => (
  <>
    <DividerMiddle
      bg="linear-gradient(to left, #2e1675 100%, SlateBlue 0% )"
      speed={-0.2}
      offset={`${offset}.1`}
      factor={2}
    />
    <Content speed={0.6} offset={`${offset}.2`} factor={2}>
      <Inner>{children}</Inner>
    </Content>
    <Divider speed={0.3} offset={offset} factor={2}>
      <UpDown>
        <SVG icon="box" width={6} fill={colors.white} left="85%" top="75%" />
        <SVG icon="hexa" width={8} fill={colors['purple-hiphop']} left="70%" top="20%" />
        <SVG icon="triangle" width={8} stroke={colors['purple-hiphop']} left="25%" top="5%" />
      </UpDown>
      <UpDownWide>
        <SVG icon="arrowUp" hiddenMobile width={16} fill={colors['purple-hiphop']} left="20%" top="90%" />
        <SVG icon="circle" width={16} fill={colors['purple-hiphop']} left="70%" top="90%" />
        <SVG icon="circle" width={6} fill={colors['purple-hiphop']} left="75%" top="10%" />
      </UpDownWide>
      <SVG icon="hexa" width={8} stroke={colors.white} left="20%" top="70%" />
    </Divider>
  </>
)

export default Projects

Projects.propTypes = {
  children: PropTypes.node.isRequired,
  offset: PropTypes.number.isRequired,
}
