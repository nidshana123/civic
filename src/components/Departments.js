@@ .. @@
 import {
   Box,
   Button,
   Typography,
   Paper,
   TextField,
   Table,
   TableHead,
   TableRow,
   TableCell,
   TableBody,
   Tooltip,
   IconButton,
   Dialog,
   DialogActions,
   DialogContent,
   DialogContentText,
   DialogTitle,
   FormControl,
   InputLabel,
   Select,
   MenuItem,
   OutlinedInput,
   Chip,
-  Checkbox
+  Checkbox,
+  useTheme,
+  alpha,
 } from "@mui/material";
 import DeleteIcon from "@mui/icons-material/Delete";
@@ .. @@
 import { db } from "../firebase";


-const OliveButton = styled(Button)({
-  backgroundColor: "#3b5b27", // Updated color
-  color: "#fff",
-  fontWeight: 700,
-  padding: "10px 24px",
-  borderRadius: 8,
-  fontSize: "1rem",
-  textTransform: "none",
-  "&:hover": {
-    backgroundColor: "#2e471e",
-  },
-});
+const OliveButton = styled(Button)(({ theme }) => ({
+  backgroundColor: theme.palette.primary.main,
+  color: theme.palette.primary.contrastText,
+  fontWeight: 700,
+  padding: "10px 24px",
+  borderRadius: 8,
+  fontSize: "1rem",
+  textTransform: "none",
+  "&:hover": {
+    backgroundColor: theme.palette.primary.dark,
+  },
+}));

 function getUsernameWord(str) {
@@ .. @@
 
 export default function Departments() {
+  const theme = useTheme();
   const [departments, setDepartments] = useState([]);
@@ .. @@
     <Box
       className="departments-page"
       sx={{
         height: "100vh",
         width: "100%",
-        bgcolor: "#f6f7f1",
+        bgcolor: theme.palette.background.default,
         display: "flex",
         flexDirection: "column",
         alignItems: "center",
@@ .. @@
       <Paper
         className="dept-create"
         sx={{
           p: 4,
           mb: 6, // Increased margin-bottom for more space between containers
           borderRadius: 4,
-          bgcolor: "#f7faf7",
+          bgcolor: theme.palette.background.paper,
           boxShadow: 4,
           width: "100%",
           maxWidth: 600, // Reduced maxWidth for a smaller creation container
         }}
       >
-        <Typography variant="h5" sx={{ mb: 3, fontWeight: "bold", color: "#486025" ,textAlign: "center", letterSpacing: 1}}>
+        <Typography variant="h5" sx={{ mb: 3, fontWeight: "bold", color: theme.palette.primary.main, textAlign: "center", letterSpacing: 1}}>
           Create Department
         </Typography>
@@ .. @@
                       label={cat?.CategoryName || cat?.name || "Unnamed"}
                       sx={{
-                        bgcolor: "#e4ecce",
-                        color: "#395d2d",
+                        bgcolor: alpha(theme.palette.secondary.main, 0.2),
+                        color: theme.palette.primary.main,
                         fontWeight: 600,
                         borderRadius: 4,
                         fontSize: "0.97rem",
                         mr: 0.6,
                         mb: 0.5,
-                        border: "1px solid #d4ddb0",
+                        border: `1px solid ${alpha(theme.palette.secondary.main, 0.3)}`,
                       }}
                     />
                   );
@@ .. @@
           <Button
             variant="contained"
             disabled={isSaving}
             onClick={handleShowAssignedDialog}
             fullWidth
-            sx={{ fontWeight: "bold", bgcolor: "#3b5b27", color: "#fff", mt: 2, "&:hover": { bgcolor: "#2e471e" } }}
+            sx={{ 
+              fontWeight: "bold", 
+              bgcolor: theme.palette.primary.main, 
+              color: theme.palette.primary.contrastText, 
+              mt: 2, 
+              "&:hover": { bgcolor: theme.palette.primary.dark } 
+            }}
           >
             {isSaving ? "Creating..." : "Add"}
           </Button>
@@ .. @@
         <Box sx={{ display: "flex", gap: 2 }}>
           <Button
             variant="outlined"
             onClick={() => setSelectedCategories([])}
-            sx={{ fontWeight: "bold", bgcolor: "#fffde7", color: "#3b5b27", borderColor: "#3b5b27", "&:hover": { bgcolor: "#f7faf7", borderColor: "#2e471e", color: "#2e471e" } }}
+            sx={{ 
+              fontWeight: "bold", 
+              bgcolor: alpha(theme.palette.secondary.light, 0.1), 
+              color: theme.palette.primary.main, 
+              borderColor: theme.palette.primary.main, 
+              "&:hover": { 
+                bgcolor: alpha(theme.palette.secondary.light, 0.2), 
+                borderColor: theme.palette.primary.dark, 
+                color: theme.palette.primary.dark 
+              } 
+            }}
           >
             Clear
           </Button>
@@ .. @@
       <Paper
         className="dept-table"
         sx={{
           p: 2,
           borderRadius: 4,
-          bgcolor: "#f7faf7",
+          bgcolor: theme.palette.background.paper,
           boxShadow: 3,
           width: "100%",
           maxWidth: "100%",
@@ .. @@
         <Typography
           variant="h6"
           gutterBottom
           sx={{
             fontWeight: 700,
-            color: "#5c713e",
+            color: theme.palette.primary.main,
             mb: 2,
             textAlign: "center", // Center the text
             letterSpacing: 1,
@@ .. @@
         >
           <TableHead>
-            <TableRow sx={{ bgcolor: "#d0e8c1" }}>
-              <TableCell sx={{ fontWeight: "bold", color: "#0c0a0aff" }}>Name</TableCell>
-              <TableCell sx={{ fontWeight: "bold", color: "#020202ff" }}>Department Head</TableCell>
-              <TableCell sx={{ fontWeight: "bold", color: "#0e0b0bff" }}>Email</TableCell>
-              <TableCell sx={{ fontWeight: "bold", color: "#050404ff" }}>Assigned Categories</TableCell>
-              <TableCell align="center" sx={{ fontWeight: "bold", color: "#110606ff" }}>
+            <TableRow sx={{ bgcolor: alpha(theme.palette.secondary.main, 0.2) }}>
+              <TableCell sx={{ fontWeight: "bold", color: theme.palette.text.primary }}>Name</TableCell>
+              <TableCell sx={{ fontWeight: "bold", color: theme.palette.text.primary }}>Department Head</TableCell>
+              <TableCell sx={{ fontWeight: "bold", color: theme.palette.text.primary }}>Email</TableCell>
+              <TableCell sx={{ fontWeight: "bold", color: theme.palette.text.primary }}>Assigned Categories</TableCell>
+              <TableCell align="center" sx={{ fontWeight: "bold", color: theme.palette.text.primary }}>
                 Actions
               </TableCell>
             </TableRow>
@@ .. @@
             {departments.length === 0 ? (
               <TableRow>
-                <TableCell colSpan={5} align="center" sx={{ fontStyle: "italic", color: "#758f4e", py: 4 }}>
+                <TableCell colSpan={5} align="center" sx={{ fontStyle: "italic", color: theme.palette.text.secondary, py: 4 }}>
                   No departments found.
                 </TableCell>
               </TableRow>
@@ .. @@
                     <Button
                       variant="outlined"
                       startIcon={<VisibilityIcon />}
                       size="small"
                       sx={{
                         fontWeight: 700,
-                        bgcolor: "#eaf2d4",
-                        color: "#3b5b27",
+                        bgcolor: alpha(theme.palette.secondary.light, 0.2),
+                        color: theme.palette.primary.main,
                         borderRadius: 2,
                         ml: 1,
                         mt: 1,
-                        borderColor: "#3b5b27",
-                        "&:hover": { bgcolor: "#d4ddb0", color: "#2e471e", borderColor: "#2e471e" },
+                        borderColor: theme.palette.primary.main,
+                        "&:hover": { 
+                          bgcolor: alpha(theme.palette.secondary.light, 0.3), 
+                          color: theme.palette.primary.dark, 
+                          borderColor: theme.palette.primary.dark 
+                        },
                       }}
                       onClick={() => openReassignDialog(dept)}
                     >
@@ .. @@
                   <TableCell align="center">
                     <Tooltip title="Delete Department">
                       <IconButton
-                        sx={{ color: "#3b5b27" }}
+                        sx={{ color: theme.palette.primary.main }}
                         onClick={() => openDeleteDialog(dept)}
                       >
                         <DeleteIcon />
@@ .. @@
         </DialogContent>
         <DialogActions>
-          <Button onClick={() => setDeleteDialogOpen(false)} sx={{ color: "#3b5b27" }}>
+          <Button onClick={() => setDeleteDialogOpen(false)} sx={{ color: theme.palette.primary.main }}>
             Cancel
           </Button>
-          <Button color="error" variant="contained" onClick={handleDeleteDepartment} sx={{ bgcolor: "#3b5b27", color: "#fff", "&:hover": { bgcolor: "#2e471e" } }}>
+          <Button color="error" variant="contained" onClick={handleDeleteDepartment} sx={{ bgcolor: theme.palette.error.main, color: "#fff", "&:hover": { bgcolor: theme.palette.error.dark } }}>
             Delete
           </Button>
         </DialogActions>
@@ .. @@
                         <Chip
                           key={catId}
                           label={cat?.CategoryName || cat?.name || "Unnamed"}
                           sx={{
-                            bgcolor: "#eaf2d4",
-                            color: "#395c2e",
+                            bgcolor: alpha(theme.palette.secondary.light, 0.2),
+                            color: theme.palette.primary.main,
                             fontWeight: 600,
                             mr: 0.5,
                             mb: 0.5,
                             borderRadius: 2,
                             fontSize: ".95rem",
-                            border: "1px solid #d4ddb0",
+                            border: `1px solid ${alpha(theme.palette.secondary.main, 0.3)}`,
                           }}
                         />
                       );
@@ .. @@
                     <Chip
                       label="None"
-                      sx={{ bgcolor: "#eaf2d4", fontWeight: 600, color: "#758f4e" }}
+                      sx={{ bgcolor: alpha(theme.palette.secondary.light, 0.2), fontWeight: 600, color: theme.palette.text.secondary }}
                     />
                   ) : (
@@ .. @@
         </DialogContent>
         <DialogActions>
-          <Button onClick={closeReassignDialog} sx={{ color: "#3b5b27" }}>
+          <Button onClick={closeReassignDialog} sx={{ color: theme.palette.primary.main }}>
             Close
           </Button>
           <Button
             variant="contained"
             onClick={() => {
               handleSaveReassign(reassignDept.id);
               closeReassignDialog();
             }}
             disabled={!reassignDept}
-            sx={{ bgcolor: "#3b5b27", color: "#fff", "&:hover": { bgcolor: "#2e471e" } }}
+            sx={{ bgcolor: theme.palette.primary.main, color: theme.palette.primary.contrastText, "&:hover": { bgcolor: theme.palette.primary.dark } }}
           >
             Save
           </Button>
@@ .. @@
                 <Chip
                   key={id}
                   label={cat?.CategoryName || cat?.name || "Unnamed"}
                   sx={{
-                    bgcolor: "#e4ecce",
-                    color: "#395d2d",
+                    bgcolor: alpha(theme.palette.secondary.main, 0.2),
+                    color: theme.palette.primary.main,
                     fontWeight: 600,
                     borderRadius: 4,
                     fontSize: "0.97rem",
                     mr: 0.6,
                     mb: 0.5,
-                    border: "1px solid #d4ddb0",
+                    border: `1px solid ${alpha(theme.palette.secondary.main, 0.3)}`,
                   }}
                 />
               );
@@ .. @@
         <DialogActions>
           <Button
             onClick={() => setShowAssignedDialog(false)}
-            sx={{ color: "#3b5b27" }}
+            sx={{ color: theme.palette.primary.main }}
           >
             Cancel
           </Button>
           <Button
             variant="contained"
             onClick={handleAddDepartment}
-            sx={{ bgcolor: "#3b5b27", color: "#fff", "&:hover": { bgcolor: "#2e471e" } }}
+            sx={{ bgcolor: theme.palette.primary.main, color: theme.palette.primary.contrastText, "&:hover": { bgcolor: theme.palette.primary.dark } }}
           >
             Confirm & Create
           </Button>