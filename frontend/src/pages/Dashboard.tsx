import { Card, CardHeader, CardAction, CardFooter, CardDescription, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import type { ColumnDef, flexRender, getCoreRowModel, useReactTable } from "@tanstack/react-table"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

export default function DashboardPage() {
  return (
    <div className="p-4">
      <Card>
        <CardHeader>
          <CardTitle>Projects</CardTitle>
          <CardDescription>All projects you own or have an active membership on.</CardDescription>
          <CardAction>
            <Button>Create Project</Button>
          </CardAction>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>
                  Test
                </TableHead>
                <TableHead>Test2</TableHead>
                <TableHead>Test3</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody></TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
}