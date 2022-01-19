import PropTypes from 'prop-types';
import {
  Container,
  Title,
  StatList,
  StatEl,
  Label,
  Percentage,
} from './statistics.styled';

export default function Statistics({ title, stats }) {
  return (
    <Container>
      {title && <Title>{title}</Title>}

      <StatList>
        {stats.map(({ id, label, percentage }) => (
          <StatEl key={id}>
            <Label>{label}</Label>
            <Percentage>{percentage}%</Percentage>
          </StatEl>
        ))}
      </StatList>
    </Container>
  );
}
Statistics.propTypes = {
  title: PropTypes.string,
  label: PropTypes.string,
  percentage: PropTypes.number,
};
