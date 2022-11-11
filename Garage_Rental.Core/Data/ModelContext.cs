using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata;

#nullable disable

namespace Garage_Rental.Core.Data
{
    public partial class ModelContext : DbContext
    {
        public ModelContext()
        {
        }

        public ModelContext(DbContextOptions<ModelContext> options)
            : base(options)
        {
        }

        public virtual DbSet<AboutU> AboutUs { get; set; }
        public virtual DbSet<Car> Cars { get; set; }
        public virtual DbSet<ContactU> ContactUs { get; set; }
        public virtual DbSet<Garage> Garages { get; set; }
        public virtual DbSet<Home> Homes { get; set; }
        public virtual DbSet<Payment> Payments { get; set; }
        public virtual DbSet<Rent> Rents { get; set; }
        public virtual DbSet<Role> Roles { get; set; }
        public virtual DbSet<Testimonial> Testimonials { get; set; }
        public virtual DbSet<User> Users { get; set; }
        public virtual DbSet<Visa> Visas { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            if (!optionsBuilder.IsConfigured)
            {
#warning To protect potentially sensitive information in your connection string, you should move it out of source code. You can avoid scaffolding the connection string by using the Name= syntax to read it from configuration - see https://go.microsoft.com/fwlink/?linkid=2131148. For more guidance on storing connection strings, see http://go.microsoft.com/fwlink/?LinkId=723263.
                optionsBuilder.UseOracle("User Id=JOR15_User77;PASSWORD=hr;DATA SOURCE=94.56.229.181:3488/traindb");
            }
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.HasDefaultSchema("JOR15_USER77")
                .HasAnnotation("Relational:Collation", "USING_NLS_COMP");

            modelBuilder.Entity<AboutU>(entity =>
            {
                entity.ToTable("ABOUT_US");

                entity.Property(e => e.Id)
                    .HasColumnType("NUMBER")
                    .ValueGeneratedOnAdd()
                    .HasColumnName("ID");

                entity.Property(e => e.Address)
                    .HasMaxLength(100)
                    .IsUnicode(false)
                    .HasColumnName("ADDRESS");

                entity.Property(e => e.Email)
                    .HasMaxLength(100)
                    .IsUnicode(false)
                    .HasColumnName("EMAIL");

                entity.Property(e => e.Message)
                    .HasMaxLength(300)
                    .IsUnicode(false)
                    .HasColumnName("MESSAGE");

                entity.Property(e => e.Name)
                    .HasMaxLength(100)
                    .IsUnicode(false)
                    .HasColumnName("NAME");

                entity.Property(e => e.PhoneNumber)
                    .HasPrecision(17)
                    .HasColumnName("PHONE_NUMBER");
            });

            modelBuilder.Entity<Car>(entity =>
            {
                entity.ToTable("CARS");

                entity.Property(e => e.CAR_ID)
                    .HasColumnType("NUMBER")
                    .ValueGeneratedOnAdd()
                    .HasColumnName("CAR_ID");

                entity.Property(e => e.CAR_PLATE)
                    .HasMaxLength(50)
                    .IsUnicode(false)
                    .HasColumnName("CAR_TYPE");

                entity.Property(e => e.CAR_TYPE)
                    .HasMaxLength(50)
                    .IsUnicode(false)
                    .HasColumnName("CAR_TYPE");

                entity.Property(e => e.USER_ID)
                    .HasColumnType("NUMBER")
                    .HasColumnName("USER_ID");

                entity.HasOne(d => d.User)
                    .WithMany(p => p.Cars)
                    .HasForeignKey(d => d.USER_ID)
                    .OnDelete(DeleteBehavior.Cascade)
                    .HasConstraintName("SYS_C00297965");
            });

            modelBuilder.Entity<ContactU>(entity =>
            {
                entity.ToTable("CONTACT_US");

                entity.Property(e => e.Id)
                    .HasColumnType("NUMBER")
                    .ValueGeneratedOnAdd()
                    .HasColumnName("ID");

                entity.Property(e => e.Email)
                    .HasMaxLength(100)
                    .IsUnicode(false)
                    .HasColumnName("EMAIL");

                entity.Property(e => e.Message)
                    .HasMaxLength(300)
                    .IsUnicode(false)
                    .HasColumnName("MESSAGE");

                entity.Property(e => e.Name)
                    .HasMaxLength(100)
                    .IsUnicode(false)
                    .HasColumnName("NAME");

                entity.Property(e => e.PhoneNumber)
                    .HasPrecision(17)
                    .HasColumnName("PHONE_NUMBER");
            });

            modelBuilder.Entity<Garage>(entity =>
            {
                entity.ToTable("GARAGE");

                entity.Property(e => e.GARAGE_ID)
                    .HasColumnType("NUMBER")
                    .ValueGeneratedOnAdd()
                    .HasColumnName("GARAGE_ID");

                entity.Property(e => e.AVAILABLE_FROM)
                    .HasColumnType("NUMBER")
                    .HasColumnName("AVAILABLE_FROM");

                entity.Property(e => e.AVAILABLE_TO)
                    .HasColumnType("NUMBER")
                    .HasColumnName("AVAILABLE_TO");

                entity.Property(e => e.BUILDING_NUMBER)
                    .HasColumnType("NUMBER")
                    .HasColumnName("BUILDING_NUMBER");

                entity.Property(e => e.GARAGE_MODE)
                    .HasMaxLength(50)
                    .IsUnicode(false)
                    .HasColumnName("GARAGE_MODE");

                entity.Property(e => e.GARAGE_NAME)
                    .HasMaxLength(50)
                    .IsUnicode(false)
                    .HasColumnName("GARAGE_NAME");

                entity.Property(e => e.Image1)
                    .HasMaxLength(300)
                    .IsUnicode(false)
                    .HasColumnName("IMAGE1");

                entity.Property(e => e.Image2)
                    .HasMaxLength(300)
                    .IsUnicode(false)
                    .HasColumnName("IMAGE2");

                entity.Property(e => e.Latitude)
                    .HasMaxLength(50)
                    .IsUnicode(false)
                    .HasColumnName("LATITUDE");

                entity.Property(e => e.Longitude)
                    .HasMaxLength(50)
                    .IsUnicode(false)
                    .HasColumnName("LONGITUDE");

                entity.Property(e => e.RENT_PRICE)
                    .HasColumnType("NUMBER")
                    .HasColumnName("RENT_PRICE");

                entity.Property(e => e.Status)
                    .HasMaxLength(20)
                    .IsUnicode(false)
                    .HasColumnName("STATUS");

                entity.Property(e => e.Street)
                    .HasMaxLength(50)
                    .IsUnicode(false)
                    .HasColumnName("STREET");

                entity.Property(e => e.USER_ID)
                    .HasColumnType("NUMBER")
                    .HasColumnName("USER_ID");

                entity.HasOne(d => d.User)
                    .WithMany(p => p.Garages)
                    .HasForeignKey(d => d.USER_ID)
                    .OnDelete(DeleteBehavior.Cascade)
                    .HasConstraintName("SYS_C00297962");
            });

            modelBuilder.Entity<Home>(entity =>
            {
                entity.ToTable("HOME");

                entity.Property(e => e.Id)
                    .HasColumnType("NUMBER")
                    .ValueGeneratedOnAdd()
                    .HasColumnName("ID");

                entity.Property(e => e.Image1)
                    .HasMaxLength(250)
                    .IsUnicode(false)
                    .HasColumnName("IMAGE_1");

                entity.Property(e => e.Image2)
                    .HasMaxLength(250)
                    .IsUnicode(false)
                    .HasColumnName("IMAGE_2");

                entity.Property(e => e.Image3)
                    .HasMaxLength(250)
                    .IsUnicode(false)
                    .HasColumnName("IMAGE_3");

                entity.Property(e => e.Title1)
                    .HasMaxLength(250)
                    .IsUnicode(false)
                    .HasColumnName("TITLE_1");

                entity.Property(e => e.Title2)
                    .HasMaxLength(250)
                    .IsUnicode(false)
                    .HasColumnName("TITLE_2");

                entity.Property(e => e.Title3)
                    .HasMaxLength(250)
                    .IsUnicode(false)
                    .HasColumnName("TITLE_3");
            });

            modelBuilder.Entity<Payment>(entity =>
            {
                entity.HasKey(e => e.PayId)
                    .HasName("SYS_C00297973");

                entity.ToTable("PAYMENT");

                entity.Property(e => e.PayId)
                    .HasColumnType("NUMBER")
                    .ValueGeneratedOnAdd()
                    .HasColumnName("PAY_ID");

                entity.Property(e => e.CommissionRate)
                    .HasColumnType("NUMBER")
                    .HasColumnName("COMMISSION_RATE");

                entity.Property(e => e.GarageName)
                    .HasMaxLength(50)
                    .IsUnicode(false)
                    .HasColumnName("GARAGE_NAME");

                entity.Property(e => e.PayAmount)
                    .HasColumnType("NUMBER")
                    .HasColumnName("PAY_AMOUNT");

                entity.Property(e => e.PayDate)
                    .HasColumnType("DATE")
                    .HasColumnName("PAY_DATE");

                entity.Property(e => e.RentId)
                    .HasColumnType("NUMBER")
                    .HasColumnName("RENT_ID");

                entity.Property(e => e.UserId)
                    .HasColumnType("NUMBER")
                    .HasColumnName("USER_ID");

                entity.Property(e => e.VisaId)
                    .HasColumnType("NUMBER")
                    .HasColumnName("VISA_ID");

                entity.HasOne(d => d.Rent)
                    .WithMany(p => p.Payments)
                    .HasForeignKey(d => d.RentId)
                    .OnDelete(DeleteBehavior.SetNull)
                    .HasConstraintName("SYS_C00297976");

                entity.HasOne(d => d.User)
                    .WithMany(p => p.Payments)
                    .HasForeignKey(d => d.UserId)
                    .OnDelete(DeleteBehavior.SetNull)
                    .HasConstraintName("SYS_C00297974");

                entity.HasOne(d => d.Visa)
                    .WithMany(p => p.Payments)
                    .HasForeignKey(d => d.VisaId)
                    .OnDelete(DeleteBehavior.SetNull)
                    .HasConstraintName("SYS_C00297975");
            });

            modelBuilder.Entity<Rent>(entity =>
            {
                entity.ToTable("RENT");

                entity.Property(e => e.RentId)
                    .HasColumnType("NUMBER")
                    .ValueGeneratedOnAdd()
                    .HasColumnName("RENT_ID");

                entity.Property(e => e.EndTime)
                    .HasColumnType("NUMBER")
                    .HasColumnName("END_TIME");

                entity.Property(e => e.GarageId)
                    .HasColumnType("NUMBER")
                    .HasColumnName("GARAGE_ID");

                entity.Property(e => e.RentDate)
                    .HasColumnType("DATE")
                    .HasColumnName("RENT_DATE");

                entity.Property(e => e.StartTime)
                    .HasColumnType("NUMBER")
                    .HasColumnName("START_TIME");

                entity.Property(e => e.UserId)
                    .HasColumnType("NUMBER")
                    .HasColumnName("USER_ID");

                entity.HasOne(d => d.Garage)
                    .WithMany(p => p.Rents)
                    .HasForeignKey(d => d.GarageId)
                    .OnDelete(DeleteBehavior.SetNull)
                    .HasConstraintName("SYS_C00297970");

                entity.HasOne(d => d.User)
                    .WithMany(p => p.Rents)
                    .HasForeignKey(d => d.UserId)
                    .OnDelete(DeleteBehavior.Cascade)
                    .HasConstraintName("SYS_C00297971");
            });

            modelBuilder.Entity<Role>(entity =>
            {
                entity.ToTable("ROLES");

                entity.Property(e => e.ROLE_ID)
                    .HasColumnType("NUMBER")
                    .ValueGeneratedOnAdd()
                    .HasColumnName("ROLE_ID");

                entity.Property(e => e.ROLE_NAME)
                    .IsRequired()
                    .HasMaxLength(20)
                    .IsUnicode(false)
                    .HasColumnName("ROLE_NAME");
            });

            modelBuilder.Entity<Testimonial>(entity =>
            {
                entity.ToTable("TESTIMONIAL");

                entity.Property(e => e.Id)
                    .HasColumnType("NUMBER")
                    .ValueGeneratedOnAdd()
                    .HasColumnName("ID");

                entity.Property(e => e.Opinion)
                    .HasMaxLength(100)
                    .IsUnicode(false)
                    .HasColumnName("OPINION");

                entity.Property(e => e.Rating)
                    .HasPrecision(10)
                    .HasColumnName("RATING");

                entity.Property(e => e.Status)
                    .HasMaxLength(50)
                    .IsUnicode(false)
                    .HasColumnName("STATUS");

                entity.Property(e => e.UserId)
                    .HasColumnType("NUMBER")
                    .HasColumnName("USER_ID");

                entity.HasOne(d => d.User)
                    .WithMany(p => p.Testimonials)
                    .HasForeignKey(d => d.UserId)
                    .OnDelete(DeleteBehavior.Cascade)
                    .HasConstraintName("SYS_C00297985");
            });

            modelBuilder.Entity<User>(entity =>
            {
                entity.ToTable("USERS");

                entity.Property(e => e.USER_ID)
                    .HasColumnType("NUMBER")
                    .ValueGeneratedOnAdd()
                    .HasColumnName("USER_ID");

                entity.Property(e => e.Email)
                    .IsRequired()
                    .HasMaxLength(50)
                    .IsUnicode(false)
                    .HasColumnName("EMAIL");

                entity.Property(e => e.FIRST_NAME)
                    .IsRequired()
                    .HasMaxLength(50)
                    .IsUnicode(false)
                    .HasColumnName("FIRST_NAME");

                entity.Property(e => e.LAST_NAME)
                    .IsRequired()
                    .HasMaxLength(50)
                    .IsUnicode(false)
                    .HasColumnName("LAST_NAME");

                entity.Property(e => e.Password)
                    .IsRequired()
                    .HasMaxLength(50)
                    .IsUnicode(false)
                    .HasColumnName("PASSWORD");

                entity.Property(e => e.Phonenumber)
                    .HasColumnType("NUMBER(20)")
                    .HasColumnName("PHONENUMBER");

                entity.Property(e => e.ROLES_ID)
                    .HasColumnType("NUMBER")
                    .HasColumnName("ROLES_ID");

                entity.Property(e => e.USER_IDENTITY)
                    .HasMaxLength(100)
                    .IsUnicode(false)
                    .HasColumnName("USER_IDENTITY");

                entity.Property(e => e.USER_IMAGE)
                    .HasMaxLength(300)
                    .IsUnicode(false)
                    .HasColumnName("USER_IMAGE");

                entity.HasOne(d => d.Roles)
                    .WithMany(p => p.Users)
                    .HasForeignKey(d => d.ROLES_ID)
                    .OnDelete(DeleteBehavior.Cascade)
                    .HasConstraintName("SYS_C00297956");
            });

            modelBuilder.Entity<Visa>(entity =>
            {
                entity.ToTable("VISA");

                entity.Property(e => e.VISA_ID)
                    .HasColumnType("NUMBER")
                    .ValueGeneratedOnAdd()
                    .HasColumnName("VISA_ID");

                entity.Property(e => e.CVC_CVV)
                    .HasColumnType("NUMBER")
                    .HasColumnName("CVC_CVV");

                entity.Property(e => e.END_DATE)
                    .HasColumnType("DATE")
                    .HasColumnName("END_DATE");

                entity.Property(e => e.VISA_AMOUNT)
                    .HasColumnType("NUMBER")
                    .HasColumnName("VISA_AMOUNT");

                entity.Property(e => e.VISA_NAME)
                    .HasMaxLength(50)
                    .IsUnicode(false)
                    .HasColumnName("VISA_NAME");

                entity.Property(e => e.VISA_NUMBER)
                    .HasColumnType("NUMBER")
                    .HasColumnName("VISA_NUMBER");
            });

            modelBuilder.HasSequence("SEQDEP");

            OnModelCreatingPartial(modelBuilder);
        }

        partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
    }
}
