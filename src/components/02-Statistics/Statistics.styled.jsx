import styled from '@emotion/styled'

export const StatisticsSection = styled.section`
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 1px solid #e6ecf3;
`

export const Title = styled.h2`
  margin: 30px 0;
  padding: 0;
  font-size: 20px;
  text-transform: uppercase;
`

export const List = styled.ul`
  display: flex;
  margin: 0;
  padding: 0;
  list-style: none;
`
export const Item = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px;
  background-color: ${() => `#${Math.floor(
					Math.random() * 16777215
				).toString(16)}`}
`

export const Label = styled.span`
  font-size: 14px;
  margin-bottom: 5px;
`

export const Percentage = styled.span`
font-size: 28px;
`