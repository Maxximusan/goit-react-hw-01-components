import styled from '@emotion/styled'

export const TransactionHistoryTable = styled.table`
	margin-top: 20px;
	margin-bottom: 20px;
	box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.25);

	& thead {
		background-color: rgb(0, 190, 218);
		color: #fff;
	}
	& th {
		padding: 10px 20px;
		width: 170px;
		font-size: 18px;
	}
`;

export const Row = styled.tr`
	font-size: 16px;
	color: rgb(136, 137, 138);
	& td {
		padding: 5px 10px;
		text-align: center;
	}
	&:nth-of-type(even) {
		background-color: rgb(245, 241, 244);
	}
`;
