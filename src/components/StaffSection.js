@@ .. @@
 export default function StaffSection({ departments = [] }) {
+  const theme = useTheme();
   const [staff, setStaff] = useState([]);
@@ .. @@
   return (
     <Box
       sx={{
         maxWidth: 900,
         mx: "auto",
-        bgcolor: "#f0f5e6",
+        bgcolor: alpha(theme.palette.secondary.light, 0.1),
         p: 3,
         borderRadius: 3,
         fontFamily: "'Roboto', sans-serif",
-        color: "#3c5123",
+        color: theme.palette.text.primary,
       }}
     >
-      <Typography variant="h5" sx={{ fontWeight: "700", mb: 2, color: "#527029" }}>
+      <Typography variant="h5" sx={{ fontWeight: "700", mb: 2, color: theme.palette.primary.main }}>
         Staff Members - {dept.name}
       </Typography>

@@ .. @@
         <Button
           variant="contained"
           sx={{
-            backgroundColor: "#527029",
-            "&:hover": { backgroundColor: "#466316" },
+            backgroundColor: theme.palette.primary.main,
+            "&:hover": { backgroundColor: theme.palette.primary.dark },
             fontWeight: "700",
             letterSpacing: 0.5,
           }}
@@ .. @@
       {error && (
         <Typography color="error" sx={{ mb: 2, fontWeight: "600" }}>
           {error}
         </Typography>
       )}

       {filteredStaff.length === 0 ? (
-        <Typography sx={{ fontStyle: "italic", mt: 5, color: "#78954c", textAlign: "center" }}>
+        <Typography sx={{ fontStyle: "italic", mt: 5, color: theme.palette.text.secondary, textAlign: "center" }}>
           No staff found.
         </Typography>
       ) : (
@@ .. @@
         <Paper sx={{ borderRadius: 3, boxShadow: 3, overflowX: "auto" }}>
           <Table sx={{ minWidth: 650 }}>
-            <TableHead sx={{ backgroundColor: "#c9dbb4" }}>
+            <TableHead sx={{ backgroundColor: alpha(theme.palette.secondary.main, 0.2) }}>
               <TableRow>
-                <TableCell sx={{ fontWeight: "700", color: "#3c5123" }}>Name</TableCell>
-                <TableCell sx={{ fontWeight: "700", color: "#3c5123" }}>Email</TableCell>
-                <TableCell sx={{ fontWeight: "700", color: "#3c5123" }}>Phone</TableCell>
-                <TableCell sx={{ fontWeight: "700", color: "#3c5123" }}>Role</TableCell>
-                <TableCell sx={{ fontWeight: "700", color: "#3c5123" }} align="center">
+                <TableCell sx={{ fontWeight: "700", color: theme.palette.text.primary }}>Name</TableCell>
+                <TableCell sx={{ fontWeight: "700", color: theme.palette.text.primary }}>Email</TableCell>
+                <TableCell sx={{ fontWeight: "700", color: theme.palette.text.primary }}>Phone</TableCell>
+                <TableCell sx={{ fontWeight: "700", color: theme.palette.text.primary }}>Role</TableCell>
+                <TableCell sx={{ fontWeight: "700", color: theme.palette.text.primary }} align="center">
                   Actions
                 </TableCell>
               </TableRow>
@@ .. @@
                 <TableRow
                   key={s.id}
                   sx={{
-                    "&:nth-of-type(odd)": { backgroundColor: "#edf4ce" },
-                    "&:hover": { backgroundColor: "#d4e798", cursor: "pointer" },
+                    "&:nth-of-type(odd)": { backgroundColor: alpha(theme.palette.secondary.light, 0.1) },
+                    "&:hover": { backgroundColor: alpha(theme.palette.secondary.main, 0.1), cursor: "pointer" },
                   }}
                 >
@@ .. @@
            <Button
             onClick={handleAddStaff}
             disabled={!form.name || !form.email || !form.password || !form.deptId}
             variant="contained"
-            sx={{ backgroundColor: "#527029", "&:hover": { backgroundColor: "#466316" } }}
+            sx={{ backgroundColor: theme.palette.primary.main, "&:hover": { backgroundColor: theme.palette.primary.dark } }}
           >
             Add
           </Button>