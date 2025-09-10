@@ .. @@
 import {
   Box,
   Typography,
   Button,
   CircularProgress,
   Table,
   TableBody,
   TableCell,
   TableContainer,
   TableHead,
   TableRow,
   Paper,
+  useTheme,
 } from "@mui/material";
 import { styled } from "@mui/material/styles";
@@ .. @@
 import { db } from "../firebase";


-const OliveButton = styled(Button)({
-  backgroundColor: "#6B8E47",
-  color: "white",
-  padding: "12px 24px",
-  marginLeft: 8,
-  "&:hover": {
-    backgroundColor: "#557a31",
-  },
-});
+const OliveButton = styled(Button)(({ theme }) => ({
+  backgroundColor: theme.palette.primary.main,
+  color: theme.palette.primary.contrastText,
+  padding: "12px 24px",
+  marginLeft: 8,
+  "&:hover": {
+    backgroundColor: theme.palette.primary.dark,
+  },
+}));

 const TABLE_HEADERS = [
@@ .. @@
 
 export default function Reports() {
+  const theme = useTheme();
   const [loading, setLoading] = useState(true);
@@ .. @@
         <Table stickyHeader>
           <TableHead>
-            <TableRow sx={{ backgroundColor: "#6B8E47" }}>
+            <TableRow sx={{ backgroundColor: theme.palette.primary.main }}>
               {TABLE_HEADERS.map((head) => (
                 <TableCell
                   key={head}
                   sx={{
-                    backgroundColor: "#6B8E47",
-                    color: "#fff",
+                    backgroundColor: theme.palette.primary.main,
+                    color: theme.palette.primary.contrastText,
                     fontWeight: "bold",
                     fontSize: 16,
                     textAlign: "center",