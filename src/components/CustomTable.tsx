import {
  Stack,
  TableContainer,
  Paper,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  TablePagination,
  Table,
  CircularProgress,
} from '@mui/material';

export interface TablePropsI {
  heads: {
    field: string;
    title: string;
  }[];
  items: {
    [key: string | symbol]: any;
  }[];
  total: number;
  page: number;
  isLoading?: boolean;
  onRowClicked: (item: any) => void;
  onPageChange: (pageNumber: number) => void;
}

export const CustomTable = ({
  heads,
  items,
  total,
  page,
  isLoading = false,
  onRowClicked,
  onPageChange,
}: TablePropsI) => {
  let tableBody = isLoading ? (
    <TableRow>
      {heads.map((_, index) => (
        <TableCell key={index.toString()}>
          <CircularProgress />
        </TableCell>
      ))}
    </TableRow>
  ) : (
    items.map((item, row) => (
      <TableRow
        key={`table-item-${row}`}
        hover={true}
        onClick={() => onRowClicked(item)}
        sx={{
          cursor: 'pointer',
        }}
      >
        {heads.map((head) => (
          <TableCell>{item[head.field]}</TableCell>
        ))}
      </TableRow>
    ))
  );

  return (
    <Stack sx={{ width: '100%' }}>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 320 }}>
          <TableHead>
            <TableRow>
              {heads.map((head) => (
                <TableCell>{head.title}</TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>{tableBody}</TableBody>
        </Table>
      </TableContainer>

      <TablePagination
        component="div"
        sx={{ margin: '0 auto' }}
        count={total}
        onPageChange={(_, newPageNumber) => {
          onPageChange(newPageNumber);
        }}
        page={page}
        rowsPerPage={30}
        rowsPerPageOptions={[]}
      ></TablePagination>
    </Stack>
  );
};
