import styled from '@emotion/styled';

export const Table = styled.table`
  max-width: 1200px;
  width: 100%;
  border: none;
  margin-bottom: 20px;
  border-collapse: separate;

  thead th {
    font-weight: bold;
    text-align: left;
    border: none;
    padding: 10px 15px;
    background: #ededed;
    font-size: 14px;
    border-top: 1px solid #ddd;
  }

  tr th:first-of-type.,
  tr td:first-of-type {
    border-left: 1px solid #ddd;
  }

  tr th:last-of-type,
  tr td:last-of-type {
    border-right: 1px solid #ddd;
  }

  thead tr th:first-of-type {
    border-radius: 20px 0 0 0;
  }

  thead tr th:last-of-type {
    border-radius: 0 20px 0 0;
  }

  tbody td {
    text-align: left;
    border: none;
    padding: 10px 15px;
    font-size: 14px;
    vertical-align: top;
  }

  tbody tr:nth-of-type(even) {
    background: #f8f8f8;
  }

  tbody tr:last-of-type td {
    border-bottom: 1px solid #ddd;
  }

  tbody tr:last-of-type td:first-of-type {
    border-radius: 0 0 0 20px;
  }

  tbody tr:last-of-type td:last-of-type {
    border-radius: 0 0 20px 0;
  }

  tbody tr:nth-of-type(even) {
    background: #f3f3f3;
  }
`;
