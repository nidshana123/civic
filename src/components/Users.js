@@ .. @@
 import {
   Box,
   Typography,
   Select,
   MenuItem,
   FormControl,
   InputLabel,
   Table,
   TableBody,
   TableCell,
   TableContainer,
   TableHead,
   TableRow,
   Paper,
+  useTheme,
+  alpha,
 } from "@mui/material";
 import { styled } from "@mui/material/styles";

@@ .. @@
 
 export default function Users({ users = [] }) {
+  const theme = useTheme();
   const [roleFilter, setRoleFilter] = useState("all");
@@ .. @@
   return (
-    <Box className="users-card" sx={{ backgroundColor: "#fff", borderRadius: 2, padding: 3, boxShadow: 3 ,textAlign:"center"}}>
+    <Box className="users-card" sx={{ backgroundColor: theme.palette.background.paper, borderRadius: 2, padding: 3, boxShadow: 3, textAlign:"center"}}>
       <Typography variant="h6" fontWeight="bold" gutterBottom>
         Users
       </Typography>
@@ .. @@
       <TableContainer component={Paper}>
         <Table>
           <TableHead>
-            <TableRow>
-              <TableCell>Name</TableCell>
-              <TableCell>Email</TableCell>
-              <TableCell>Role</TableCell>
-              <TableCell>Department</TableCell>
+            <TableRow sx={{ backgroundColor: alpha(theme.palette.primary.main, 0.1) }}>
+              <TableCell sx={{ fontWeight: 600, color: theme.palette.text.primary }}>Name</TableCell>
+              <TableCell sx={{ fontWeight: 600, color: theme.palette.text.primary }}>Email</TableCell>
+              <TableCell sx={{ fontWeight: 600, color: theme.palette.text.primary }}>Role</TableCell>
+              <TableCell sx={{ fontWeight: 600, color: theme.palette.text.primary }}>Department</TableCell>
             </TableRow>
           </TableHead>
           <TableBody>
             {filteredUsers.length > 0 ? (
               filteredUsers.map((user, idx) => (
-                <TableRow key={user.id || user.email || idx}>
+                <TableRow 
+                  key={user.id || user.email || idx}
+                  sx={{
+                    "&:nth-of-type(even)": { backgroundColor: alpha(theme.palette.secondary.light, 0.05) },
+                    "&:hover": { backgroundColor: alpha(theme.palette.primary.main, 0.04) },
+                  }}
+                >
                   <TableCell>{user.name || "N/A"}</TableCell>
                   <TableCell>{user.email}</TableCell>
                   <TableCell>